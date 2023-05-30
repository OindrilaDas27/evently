from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionMixin, BaseUserManager

class userAccount(AbstractBaseUser, PermissionMixin):
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanFied(default=False)

    USERNAME_FIELD = 'email'