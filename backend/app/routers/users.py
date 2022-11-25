from fastapi import APIRouter
from ..models.views.user import UserOut
from ..models.user import User

router = APIRouter(prefix="/users", tags=["User"])


@router.get("/", response_model=list[UserOut])
async def get_all():
    return []

@router.post("/", response_model=UserOut)
async def create(user_in: User):
    return user_in

@router.put("/", response_model=UserOut)
async def update(user_in: User):
    return user_in

@router.delete("/{id}", response_model=int)
async def delete(id:int):
    return id

@router.get("/{id}", response_model=UserOut)
async def get(id:int):
    return {}
