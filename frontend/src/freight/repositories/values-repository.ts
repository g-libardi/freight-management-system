import CargoType from '../values/cargo_type';
import FreightStatusValue from '../values/freight-status';
import FreightPaymentTypeValue from '../values/freight-payment-type';


const FreightValuesRepository = {
  /**
   * Fetches all freight related value entities from the API
   * NOTE: The methods implemented here are placeholders for demonstration purposes
   */

  async getCargoTypeValues() {
    const values = ["Carga A", "Carga B", "Carga C", "Carga D", "Carga E"];
    return values.map((value, index) => CargoType.parse({ id: index, name: value }));
  },

  async getFreightStatusValues() {
    const values = ["Em rota", "Aguardando lance", "Entregue"];
    return values.map((value, index) => FreightStatusValue.parse({ id: index, name: value }));
  },
  
  async getFreightPaymentTypeValues() {
    const values = ["À Vista", "Parcelado", "Cartão de Crédito", "Boleto Bancário"];
    return values.map((value, index) => FreightPaymentTypeValue.parse({ id: index+1, name: value }));
  }
};


export default FreightValuesRepository;
