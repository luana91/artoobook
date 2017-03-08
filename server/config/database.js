
module.exports = function (mongoose) {
    mongoose.connect('mongodb://admin:admin@ds053168.mlab.com:53168/artoobook', function(err){
    if(err){
        console.log(err);
    }else{
        console.log("database connesso");
    }
});
}