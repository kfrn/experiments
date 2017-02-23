#!/usr/bin/env python3

import csv
from slugify import slugify

def writeFile(source, filename):
    with open(filename, 'w') as result:
        writer = csv.writer(result)
        writer.writerow(header)
        for row in source:
            writer.writerow(row)

def parseData(media, is_digitized):
    print("Working ...")
    media_filename = slugify(media) # "Film: 16mm" -> "film-16mm" etc
    digitized = []
    not_digitized = []
    for row in reader:
        if row[3] == media:
            if is_digitized == True:
                if row[2]:
                    print(row)
                    digitized.append(row)
                    writeFile(digitized, "digitized_%s.csv" %(media_filename))
            elif is_digitized == False:
                if not row[2]:
                    # print(row)
                    not_digitized.append(row)
                    writeFile(not_digitized, "undigitized_%s.csv" %(media_filename))
    # print("%s items of type '%s' are digitized" %(len(digitized), media))
    # print("%s items of type '%s' are not digitized" %(len(not_digitized), media))
    return

with open('csv_data.csv', 'r') as source:
    reader = csv.reader(source)
    header = next(reader)
    # Call function
    parseData("Film: 16mm", False)
