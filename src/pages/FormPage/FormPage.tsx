import React from 'react';
import './FormPage.css';
import { IFormCard } from '../../types/interfaces';
import Form from '../../components/form/form';
import FormCard from '../../components/formCard/formCard';

interface IFormPageProps {
  [key: string]: null;
}

interface IFormPageState {
  formCards: IFormCard[];
  isCardHidden: boolean;
}

class FormPage extends React.Component<IFormPageProps, IFormPageState> {
  constructor(props: IFormPageProps) {
    super(props);
    this.state = {
      formCards: [],
      isCardHidden: true,
    };
  }

  addFormCard = (formCard: IFormCard): void => {
    const formCards = [...this.state.formCards, formCard];
    this.setState({ formCards, isCardHidden: false });

    setTimeout(() => {
      this.setState({ isCardHidden: true });
    }, 10000);
  };

  render() {
    return (
      <main>
        <Form addFormCard={this.addFormCard} />
        <h2 hidden={this.state.isCardHidden}>Card added</h2>
        <div className="form-cards">
          {this.state.formCards.map((card, index) => {
            return (
              <FormCard
                key={index}
                name={card.name}
                surname={card.surname}
                date={card.date}
                country={card.country}
                gender={card.gender}
                photo={card.photo}
                consent={card.consent}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default FormPage;
