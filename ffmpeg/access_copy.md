#### FFmpeg script approximating ADs we made in MediaEncoder at Archives NZ.

**Specs**:
* H.264/AAC/MP4.
* Video: high profile @ L5, var bitrate, 1 pass, target 2 Mbps, max 20 Mbps.
* Audio: 192kbps, 48kHz.
* Colour space = Rec.601 (BT.601 PAL, aka BT.470BG).
  * See the [current H.264 standard](https://www.itu.int/rec/T-REC-H.264-201610-I/en): p.391 table entry 5, p.393 table entry 5, p.397 table entry 5. (Via [Stack Overflow](http://video.stackexchange.com/questions/16840/ffmpeg-explicitly-tag-h-264-as-bt-601-rather-than-leaving-unspecified)).

**Script**:  

```
ffmpeg -i pres_master.mov  
   -c:v libx264 -pix_fmt yuv420p -profile:v high -level:v 5.0 -color_primaries bt470bg -color_trc gamma28 -colorspace bt470bg  
   -c:a libfdk_aac -ar 48000 -b:a 192k  
   access_derivative.mp4
```

**Notes**:
* CABAC is the [default entropy encoder](https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping) used in ffmpeg. To enable explicitly, add `-coder 1`. To disable, use `--no-cabac` or `-coder 0`.
* GOP structure (M=3, N=14) not maintained. For info on setting i-frame & b-frame distance, see [here](https://sites.google.com/site/linuxencoding/x264-ffmpeg-mapping).
* Not setting bitrate, crf, preset, etc. Using libx264 [default settings](https://trac.ffmpeg.org/wiki/Encode/H.264) of crf = 23 and preset = medium.
