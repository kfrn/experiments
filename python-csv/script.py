#!/usr/bin/env python3

import csv
from slugify import slugify

def writeFile(array_of_results, filename):
    with open(filename, 'w') as result:
        writer = csv.writer(result)
        writer.writerow(header)
        for row in array_of_results:
            writer.writerow(row)

def parseData(media, is_digitized):
    print("Working ...")
    media_filename = slugify(media) # "Film: 16mm" -> "film-16mm" etc
    digitized = []
    not_digitized = []
    if is_digitized == True:
        for row in reader:
            if row[3] == media and row[2]:
                digitized.append(row)
        writeFile(digitized, "digitized_%s.csv" %(media_filename))
        print("%s items of media type '%s' are digitized." %(len(digitized), media))
        print("Results are output to 'digitized_%s.csv'." %(media_filename)) if len(digitized) >= 1 else print("No CSV output generated.")

    elif is_digitized == False:
        for row in reader:
            if row[3] == media and not row[2]:
                not_digitized.append(row)
        writeFile(not_digitized, "undigitized_%s.csv" %(media_filename))
        print("There are %s undigitized items of media type '%s'." %(len(not_digitized), media))
        print("Results are output to 'undigitized_%s.csv'." %(media_filename)) if len(not_digitized) >= 1 else print("No CSV output generated.")
    return

with open('csv_data.csv', 'r') as source:
    reader = csv.reader(source)
    header = next(reader)
    # parseData("VHS", False)
    # parseData("VHS", True)
    # parseData("Film: 16mm", False)
    # parseData("Film: 16mm", True)
    parseData("3/4 inch videotape", False)
    # parseData("3/4 inch videotape", True)
    # parseData("D3", False)
    # parseData("D3", True)
