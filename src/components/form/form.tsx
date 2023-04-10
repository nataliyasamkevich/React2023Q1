import React, { useState } from 'react';
import './form.css';
import { IFormCard } from '../../types/interfaces';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';

interface IFormProps {
  addFormCard: (key: IFormCard) => void;
}

function Form({ addFormCard }: IFormProps) {
  const [statusValid, setStatusValid] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      surname: '',
      date: '',
      country: '',
      gender: '',
      photo: '',
      consent: false,
    },
  });

  const handleClickSubmitButton = (inputData: FieldValues) => {
    setStatusValid(true);
    addFormCard({
      name: inputData.name,
      surname: inputData.surname,
      date: inputData.date,
      country: inputData.country,
      gender: inputData.country,
      photo: URL.createObjectURL(inputData.photo[0]),
      consent: inputData.consent,
    });
    reset();
    setTimeout(() => {
      setStatusValid(false);
    }, 10000);
  };

  const validateDate = (value: string) => {
    const inputDate = new Date(value);
    const currentDate = new Date();

    return inputDate < currentDate;
  };

  return (
    <form className="form" onSubmit={handleSubmit(handleClickSubmitButton)}>
      <div className="form-group__item">
        <label htmlFor="nameInput" className="form-group__label">
          Name
        </label>
        <input
          className="form-group__input"
          id="nameInput"
          type="text"
          {...register('name', {
            required: 'Please enter your name',
            pattern: {
              value: /^[A-ZА-Я]{1,}.*$/,
              message: 'The first letter must be capitalized',
            },
            minLength: { value: 2, message: 'Name must be greater than 1 letter' },
          })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group__item">
        <label htmlFor="surnameInput" className="form-group__label">
          Surname
        </label>
        <input
          className="form-group__input"
          id="surnameInput"
          type="text"
          {...register('surname', {
            required: 'Please enter your surname',
            pattern: {
              value: /^[A-ZА-Я]{1,}.*$/,
              message: 'The first letter must be capitalized',
            },
            minLength: { value: 2, message: 'Surname must be greater than 1 letter' },
          })}
        />
        {errors.surname && <p className="error-message">{errors.surname.message}</p>}
      </div>

      <div className="form-group__item">
        <label htmlFor="dateInput" className="form-group__label">
          Birthday
        </label>
        <input
          className="form-group__input"
          id="dateInput"
          type="date"
          {...register('date', {
            required: 'Please enter date of birth',
            validate: {
              validate: (value) => validateDate(value) || 'You are a person from the future',
            },
          })}
        />
        {errors.date && <p className="error-message">{errors.date.message}</p>}
      </div>

      <div className="form-group__item">
        <label htmlFor="country" className="form-group__label">
          Country
        </label>
        <select
          className="form-group__select"
          id="country"
          defaultValue="Select country"
          {...register('country', {
            required: true,
          })}
        >
          <option value="Select country" disabled>
            Select country
          </option>
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Russia">Russia</option>
          <option value="Poland">Poland</option>
          <option value="Another country">Another country</option>
        </select>
        {errors.country && <p className="error-message">Please select your country</p>}
      </div>

      <div className="form-group__item">
        <legend className="form-group__legend">Gender</legend>
        <div className="form-group__item-box">
          <div>
            <label htmlFor="male">Male</label>
            <input
              id="male"
              type="radio"
              value="man"
              {...register('gender', {
                required: true,
              })}
            />
          </div>
          <div>
            <label htmlFor="female">Female</label>
            <input
              id="female"
              type="radio"
              value="female"
              {...register('gender', {
                required: true,
              })}
            />
          </div>
        </div>
        {errors.gender && <p className="error-message">Please select your gender</p>}
      </div>

      <div className="form-group__item">
        <label htmlFor="fileInput" className="form-group__label">
          Upload file
        </label>
        <input
          className="form-group__input"
          id="fileInput"
          type="file"
          {...register('photo', {
            required: true,
          })}
        />
        {errors.photo && <p className="error-message">Please select your photo</p>}
      </div>

      <div className="form-group__item">
        <div className="form-group__item-box">
          <label htmlFor="consentInput" className="form-group__label">
            I consent to my personal data
          </label>
          <input
            className="form-group__input"
            id="consentInput"
            type="checkbox"
            {...register('consent', {
              required: true,
            })}
          />
        </div>
        {errors.consent && <p className="error-message">Please consent to proceed</p>}
      </div>

      <button className="form__button" type="submit">
        Submit
      </button>

      {statusValid && <h2>Card added</h2>}
    </form>
  );
}

export default Form;
