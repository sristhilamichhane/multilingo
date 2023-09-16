from django.urls import path, include
from . import views

urlpatterns = [
    path("register/", views.RegisterView.as_view(), name="auth_register"),
    path(
        "password/change/",
        views.ChangePasswordView.as_view(),
        name="auth_change_password",
    ),
    path(
        "password/reset/",
        include("django_rest_passwordreset.urls"),
        name="auth_reset_password",
    ),
    path(
        "verify/",
        views.VerifyEmailView.as_view(),
        name="auth_verify_email",
    ),
]
