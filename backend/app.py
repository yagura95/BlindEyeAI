from fastai.vision.all import * 

from flask import Flask, request, make_response, jsonify, send_file
import zipfile
from pathlib import Path

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>Server is up</h1>"

@app.route("/training", methods=["POST"])
def training():
    f = request.files["images"]

    try:
        with zipfile.ZipFile(f, mode="r") as archive: 
            archive.extractall("archive")
    except zipfile.BadZipFile as error:
        print(error)

    db = DataBlock(
        blocks=(ImageBlock, CategoryBlock),
        get_items=get_image_files,
        splitter=RandomSplitter(valid_pct=0.2, seed=42),
        get_y=parent_label,
        item_tfms=Resize(128))


    # Data augmentation
    db = db.new(item_tfms=RandomResizedCrop(224, min_scale=0.5), batch_tfms=aug_transforms())
    dls = db.dataloaders(Path("archive"))

    print(dls.vocab)

    learn = vision_learner(dls, resnet18, metrics=error_rate)
    learn.fine_tune(4)

    learn.export()

    # Return export.pkl file
    return send_file("./export.pkl", as_attachment=True) 

@app.route("/testing", methods=["POST"])
def testing_model():
    # learn_inf = load_learner(path/'export.pkl')
    # learn_inf.predict('images/image.png')
    return 


