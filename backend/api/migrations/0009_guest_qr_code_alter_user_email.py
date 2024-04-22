# Generated by Django 5.0.4 on 2024-04-22 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='guest',
            name='qr_code',
            field=models.ImageField(blank=True, upload_to='qr_codes'),
        ),
        migrations.AlterField(
            model_name='user',
            name='Email',
            field=models.EmailField(max_length=255),
        ),
    ]