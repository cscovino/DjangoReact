# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 14:15
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('nameApp', '0003_auto_20171204_0958'),
    ]

    operations = [
        migrations.AlterField(
            model_name='band',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2017, 12, 4, 14, 15, 8, 172324, tzinfo=utc)),
        ),
    ]