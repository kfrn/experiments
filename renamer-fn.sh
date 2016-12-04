#!/bin/bash

# Script for renaming all TIFFs in current folder to specific convention

# Naming schema:
# [magazineName][VolumeNumber]-[YEAR]-[MONTH]
# Therefore my target is: "cinemaentheater[volNo]-[year]_[page#]"

function renameFiles () {

  # Declare variables
  title="cinemaentheater"
  h="-"
  u="_"

  # Set count
  count=0

  # for loop to rename
  for file in *.tif; do
    printf -v new "$title$h$1$h$2$u%03d" "$((++count))" # Incremented number (count) replaces %03d
    mv -v -n -- "$file" "$new" # The double dash is a safety feature; no more options for mv will follow
  done
}

# Test: call with 55 (issue number) and 1922 (year)
# renameFiles 55 1922
