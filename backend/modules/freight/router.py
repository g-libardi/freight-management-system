from fastapi import APIRouter, Depends
from data import get_db
from .schemas import Freight, CreateFreight
from utils import record_to_dict

router = APIRouter()


@router.get('/', response_model=list[Freight])
async def index(db=Depends(get_db)):
    data = await db.fetch('''
    SELECT freight.id, date, price, driver, carrier, vehicle_type, freight_status, payment_type, cargo_type
    FROM freight
    JOIN driver ON freight.id_driver = driver.id
    JOIN carrier ON freight.id_carrier = carrier.id
    JOIN vehicle_type ON freight.id_vehicle_type = vehicle_type.id
    JOIN freight_status ON freight.id_freight_status = freight_status.id
    JOIN payment_type ON freight.id_payment_type = payment_type.id
    JOIN cargo_type ON freight.id_cargo_type = cargo_type.id;
    ''')
    print('\n'.join([str(dict(item)) for item in data]))
    data = [Freight.model_validate(record_to_dict(item)) for item in data]
    return data


