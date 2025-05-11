from fastapi import FastAPI, WebSocket, Request
from fastapi.responses import HTMLResponse

from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

template=Jinja2Templates(directory="templates")

app=FastAPI()
app.mount("/static",StaticFiles(directory="static"),name="static")

@app.get("/")
async def get_app(request: Request):
    return template.TemplateResponse("index.html",{"request":request})
