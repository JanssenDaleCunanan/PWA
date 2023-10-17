# Generated by Django 4.2.3 on 2023-10-05 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="ArticleCard",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("image", models.ImageField(upload_to="article_images")),
                ("title_english", models.CharField(max_length=255)),
                ("title_french", models.CharField(max_length=255)),
                ("category", models.CharField(max_length=100)),
                ("date", models.DateField()),
                ("link", models.URLField()),
            ],
        ),
    ]
