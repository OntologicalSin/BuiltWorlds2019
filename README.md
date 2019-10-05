User phase 0 - Photo collection

Create photo taking app that streamlines image collection by forcing the user of GPS and Directional and Altitude metadata
EXIF files and such

User Phase 1 - uploading

1) Create simple form to upload images and create json including exif file (or )
2) Send "images" json to the flask API
3) Flask uses YOLO or some other image processing (Pillow, MagickWand, OpenCV) ---look at siraj raval tutorials
4)Image creates new object with sorted image data
5)Python uploads object to firebase server

User Phase 2 - Sorting and editing

0) allow photos to be catagorized by thing in the photo, or location of photo
1) render images grouped in folders based on paradigm, allow to be selectable
2) Select multiple images to delete or add to final folder and make folders and stuff by doing CRUD firelist operations


1)Someone needs to label rooms on an image by its bounded pixels to and its real bounded latitude and longitude
