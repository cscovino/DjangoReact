# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-04 15:38
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import django.db.models.deletion
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('nameApp', '0014_auto_20171204_1138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='band',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2017, 12, 4, 15, 38, 38, 610907, tzinfo=utc)),
        ),
        migrations.AlterField(
            model_name='musicband',
            name='bandID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nameApp.Band'),
        ),
    ]
