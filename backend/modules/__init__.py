from fastapi import APIRouter
from .freight.router import router as freight_router

router = APIRouter()
router.include_router(freight_router, prefix='/freight', tags=['freight'])
