from pydantic import BaseModel


class Carrier(BaseModel):
    id: int
    name: str
