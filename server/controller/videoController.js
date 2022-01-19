const path = require('path');
const catchAsyncErrors = require("../middleware/catchAsyncError");

exports.getVideo = catchAsyncErrors(async (req, res, next) => {
    console.log('getVideo request with ' + req.params.roomid + ' ' + req.params.filename);
    const fileName = req.params.filename;
    //console.log(path.join(__dirname, '../storage/hls/'+req.params.roomid+'/'+req.params.filename));
    res.sendFile(fileName, { root: path.join(__dirname, '../storage/hls/'+req.params.roomid) });
});