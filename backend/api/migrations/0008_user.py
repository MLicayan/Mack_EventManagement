# Generated by Django 4.2.10 on 2024-04-18 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0007_guest_alter_events_eventtitle"),
    ]

    operations = [
        migrations.CreateModel(
            name="User",
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
                ("First_Name", models.CharField(max_length=100)),
                ("Last_Name", models.CharField(max_length=100)),
                ("Username", models.CharField(max_length=100)),
                ("Email", models.EmailField(max_length=254)),
                ("Birth_Date", models.DateField()),
            ],
        ),
    ]
