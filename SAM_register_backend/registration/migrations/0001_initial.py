# Generated by Django 5.2.3 on 2025-06-21 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('Joining IIT Bombay this year', 'Joining IIT Bombay this year'), ('Joining some other IIT this year', 'Joining some other IIT this year'), ('Already a student of IIT B', 'Already a student of IIT B')], max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=10)),
                ('email', models.EmailField(max_length=254)),
                ('city', models.CharField(max_length=50)),
                ('rank', models.CharField(max_length=20)),
                ('category', models.CharField(max_length=20)),
                ('categoryRank', models.CharField(blank=True, max_length=20, null=True)),
                ('file', models.FileField(blank=True, null=True, upload_to='uploads/')),
                ('iitOther', models.CharField(blank=True, max_length=100, null=True)),
                ('questions', models.TextField(blank=True, null=True)),
                ('submitted_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
