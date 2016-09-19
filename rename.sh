#!/bin/bash

# Script for renaming all TIFFs in current folder to specific convention

# Naming schema:
# [magazineName][VolumeNumber]-[YEAR]-[MONTH]
# Therefore my target is: "cinemaentheater55-1922_##"

# Very basic mv script:
for file in *.tiff; do
  mv -v "$file" "${file//CenT_No55/cinemaentheater55-1922}"
done

# Using rename
rename -v 's/CenT_No55/cinemaentheater55-1922/' *.tiff
