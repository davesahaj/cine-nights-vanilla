const fs = require("fs-extra");
const path = require("path");
const ffmpeg = require("fluent-ffmpeg");
require("dotenv").config({ path: `${__dirname}/../config/config.env` });

//path to ffmpeg.exe

ffmpeg.setFfmpegPath(process.env.ffmpegPath);
//path to ffprobe.exe
ffmpeg.setFfprobePath(process.env.ffprobePath);

//convert video to HLS files
function createHLS(roomname, filename) {
  return new Promise((resolve, reject) => {
    let inputFilePath = path.join(
      __dirname,
      "../uploads/" + roomname + "/" + filename
    );
    let outputFolder = "storage/hls/" + roomname;
    let outputFolderPath = path.join(__dirname, "../storage/hls/" + roomname);

    const arrFor1080p = [
      "-vf scale=w=1920:h=1080:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-c:v h264",
      "-profile:v main",
      "-crf 20",
      "-sc_threshold 0",
      "-g 48",
      "-keyint_min 48",
      "-hls_time 4",
      "-hls_playlist_type vod",
      "-b:v 5000k",
      "-maxrate 5350k",
      "-bufsize 7500k",
      "-b:a 192k",
      "-hls_segment_filename " + outputFolder + "/1080p_%03d.ts",
    ];
    const arrFor720p = [
      "-vf scale=w=1280:h=720:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-c:v h264",
      "-profile:v main",
      "-crf 20",
      "-sc_threshold 0",
      "-g 48",
      "-keyint_min 48",
      "-hls_time 4",
      "-hls_playlist_type vod",
      "-b:v 2800k",
      "-maxrate 2996k",
      "-bufsize 4200k",
      "-b:a 128k",
      "-hls_segment_filename " + outputFolder + "/720p_%03d.ts",
    ];
    const arrFor480p = [
      "-vf scale=w=842:h=480:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-c:v h264",
      "-profile:v main",
      "-crf 20",
      "-sc_threshold 0",
      "-g 48",
      "-keyint_min 48",
      "-hls_time 4",
      "-hls_playlist_type vod",
      "-b:v 1400k",
      "-maxrate 1498k",
      "-bufsize 2100k",
      "-b:a 128k",
      "-hls_segment_filename " + outputFolder + "/480p_%03d.ts",
    ];
    const arrFor360p = [
      "-vf scale=w=640:h=360:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-c:v h264",
      "-profile:v main",
      "-crf 20",
      "-sc_threshold 0",
      "-g 48",
      "-keyint_min 48",
      "-hls_time 4",
      "-hls_playlist_type vod",
      "-b:v 800k",
      "-maxrate 856k",
      "-bufsize 1200k",
      "-b:a 96k",
      "-hls_segment_filename " + outputFolder + "/360p_%03d.ts",
    ];
    const arrFor270p = [
      "-vf scale=w=480:h=270:force_original_aspect_ratio=decrease",
      "-c:a aac",
      "-ar 48000",
      "-c:v h264",
      "-profile:v main",
      "-crf 20",
      "-sc_threshold 0",
      "-g 48",
      "-keyint_min 48",
      "-hls_time 4",
      "-hls_playlist_type vod",
      "-b:v 400k",
      "-maxrate 428k",
      "-bufsize 600k",
      "-b:a 64k",
      "-hls_segment_filename " + outputFolder + "/270p_%03d.ts",
    ];

    const masterHeader = "#EXTM3U\n#EXT-X-VERSION:3\n";
    const masterBody270 =
      "#EXT-X-STREAM-INF:BANDWIDTH=400000,RESOLUTION=480x270\n270p.m3u8\n";
    const masterBody360 =
      "#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360\n360p.m3u8\n";
    const masterBody480 =
      "#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=842x480\n480p.m3u8\n";
    const masterBody720 =
      "#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1280x720\n720p.m3u8\n";
    const masterBody1080 =
      "#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080\n1080p.m3u8";
    const mastertext =
      masterHeader +
      masterBody270 +
      masterBody360 +
      masterBody480 +
      masterBody720;
    //const masterTextv2 = '#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-STREAM-INF:BANDWIDTH=800000,RESOLUTION=640x360\n360p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=1400000,RESOLUTION=842x480\n480p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=2800000,RESOLUTION=1280x720\n720p.m3u8\n#EXT-X-STREAM-INF:BANDWIDTH=5000000,RESOLUTION=1920x1080\n1080p.m3u8';

    fs.mkdir(outputFolderPath, (err) => {
      if (err) {
        return console.error(err);
      }
      console.log("HLS Directory created");
    });

    ffmpeg()
      .input(inputFilePath)

      .output(outputFolderPath + "/270p.m3u8")
      .outputOptions(arrFor270p)

      .output(outputFolderPath + "/360p.m3u8")
      .outputOptions(arrFor360p)

      .output(outputFolderPath + "/720p.m3u8")
      .outputOptions(arrFor720p)

      .on("progress", (progress) => console.log(progress.percent.toFixed(1)))
      .on("end", () => {
        console.log("Done");
        resolve();
      })
      .on("error", (err) => console.log(err))
      .run();

    fs.writeFile(
      outputFolderPath + "/" + roomname + ".m3u8",
      mastertext,
      function (err) {
        if (err) {
          return console.log(err);
        }
        console.log("master File created");
      }
    );
  });
}

module.exports = { createHLS };
