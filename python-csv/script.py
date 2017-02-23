#!/usr/bin/env python3

import csv

data = []

with open('csv_data.csv', 'r') as source:
    reader = csv.reader(source)
    header = next(reader) # Skips first line (headings) and assigns to var
    for row in reader:
        if row[3] == "VHS":
            if not row[2]:
                data.append(row)

with open("VHS_from_csv_data.csv", 'w') as result:
    writer = csv.writer(result)
    writer.writerow(header)
    for row in data:
        writer.writerow(row)
