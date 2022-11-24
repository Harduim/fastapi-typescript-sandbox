from fastapi import APIRouter
from ..models.views.user import UserOut

router = APIRouter(prefix="/multi-tags", tags=["MultipleTags", "TagsMultiple"])


@router.get("/", response_model=list[UserOut])
async def get_users():
    return []
