from flask import Flask, render_template, request, jsonify
import requests
import csv

app = Flask(__name__)

# API Key
GNEWS_API_KEY = "52a43616d12b49030dde92d73c5b9be5"


# Get the allowed countries from the csv
def read_country_codes():
    countries = {}
    with open("countries.csv", mode = "r") as file:
        reader = csv.DictReader(file)
        countries = {row["country_code"].strip().upper(): row["country_name"].strip() for row in reader}
    return countries

# Renders first the html page
@app.route("/")
def index():
    return render_template("index.html", countries=read_country_codes())


@app.route("/get_news", methods=["GET"])
def get_news():

    # Gets search arguments
    country = request.args.get("country", "US").lower()
    category = request.args.get("category", "general")
    query = request.args.get("query", "").strip()


    # if no query search for top-headlines
    endpoint = "search" if query else "top-headlines"

    params = {"apikey": GNEWS_API_KEY, "country": country, "category": category}
    if query:
        params["q"] = query

    # sends the request
    response = requests.get(f"https://gnews.io/api/v4/{endpoint}", params=params)
    
    if response.status_code == 200:
        return jsonify(response.json().get("articles", []))
    return jsonify([])

if __name__ == "__main__":
    app.run(debug=True)