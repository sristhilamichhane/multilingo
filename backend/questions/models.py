from django.db import models


# Create your models here.
class Question(models.Model):
    question = models.CharField(max_length=255)
    answer = models.CharField(max_length=255)
    difficulty_level = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="questions"
    )
    options = models.ForeignKey(
        "Option", on_delete=models.CASCADE, related_name="questions"
    )

    def __str__(self):
        return self.question


class Option(models.Model):
    type = models.CharField(max_length=255)
    value = models.CharField(max_length=255)
    question = models.ForeignKey(
        "questions.Question", on_delete=models.CASCADE, related_name="options"
    )
    is_correct = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
