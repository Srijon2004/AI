import multer from "multer"



const storage=multer.diskStorage({
    destination:(req,fule,cb)=>{
        cd(null,"./public")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage})
export default upload