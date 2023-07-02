from rest_framework import serializers
from django.contrib.auth.models import User
from django.conf import settings

from django.contrib.auth import get_user_model


class RegisterSerializer(serializers.ModelSerializer):
    """Serializer for the user object"""

    class Meta:
        model = get_user_model()
        fields = ("username", "password")

    def create(self, validated_data):
        """Create a new user with encrypted password and return it"""
        user = get_user_model().objects.create_user(
            validated_data["username"],
            validated_data["username"],
            validated_data["password"],
        )
