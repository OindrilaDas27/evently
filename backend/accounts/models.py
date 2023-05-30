from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from .manager import UserManager

class User(AbstractUser):

    email = models.EmailField(unique=True)
    email_token = models.CharField(max_length=100, null=True, blank=True)
    forget_password = models.CharField(max_length=100, null=True, blank=True)
    is_verified = models.BooleanField(default=False) 

    objects = UserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = []