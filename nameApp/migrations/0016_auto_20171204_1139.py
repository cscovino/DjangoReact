# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 15:39
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('nameApp', '0015_auto_20171204_1138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='band',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2017, 12, 4, 15, 39, 18, 151879, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='musicband',
            name='name',
            field=models.CharField(max_length=128, unique=True),
        ),
    ]
