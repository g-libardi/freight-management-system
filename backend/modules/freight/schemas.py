from pydantic import BaseModel
from datetime import datetime
from ..driver.schemas import Driver
from ..carrier.schemas import Carrier
from decimal import Decimal


class FreightStatus(BaseModel):
    id: int
    name: str


class VehicleType(BaseModel):
    id: int
    name: str


class PaymentType(BaseModel):
    id: int
    name: str


class CargoType(BaseModel):
    id: int
    name: str


class Freight(BaseModel):
    id: int
    date: datetime
    price: Decimal
    driver: Driver
    carrier: Carrier
    vehicle_type: VehicleType
    freight_status: FreightStatus
    payment_type: PaymentType
    cargo_type: CargoType


class CreateFreight(Freight):
    class Config:
        fields = {
            'id': {'exclude': True},
        }
