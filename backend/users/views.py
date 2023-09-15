from django.shortcuts import render
from django.shortcuts import render
from rest_framework import generics
from .serializers import (
    RegisterSerializer,
)
from rest_framework.permissions import AllowAny
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model


# Create your views here.
class RegisterView(generics.CreateAPIView):
    """Create a new user in the system"""

    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)
    queryset = get_user_model().objects.all()

    def post(self, request, *args, **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.create(serializer.validated_data)
            return Response(
                ["Please verify your email address."], status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
