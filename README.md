# wire-to-ui

This is an app that uses tldraw and the gpt-4-vision api to generate tailwind html/css based on a wireframe you draw.

> Disclaimer: This is a demo and is not intended for production use. It doesn't have any auth so you will go broke if you deploy it.

## How it works

Make Real is built with [tldraw](https://tldraw.dev), a very good React library for
creating whiteboards and other infinite canvas experiences.

To use it, first draw a mockup for a piece of UI. When
you're ready, select the drawing, and press the 'Make Real' button.
We'll capture an image of your selection, and send it to
[OpenAI's GPT-4V](https://platform.openai.com/docs/guides/vision) along with
instructions to turn it into a HTML file.

We take the HTML response and add it to a tldraw
[custom shape](https://tldraw.dev/docs/shapes#Custom-shapes). The custom shape
shows the response in an iframe so that you can interact with it on the canvas. If you
want to iterate on the response, annotate the iframe, select it all, and press 'Make Real' again.

### Getting Started

> You will need an OpenAI API key with access to the GPT-4 Vision API.

Before you begin, clone the project repository to your local machine:
```bash
git clone https://github.com/acidtib/wire-to-ui.git
cd wire-to-ui
```

**Set Up Your OpenAI API Key**  
Create a `.env.local` file in the root directory with your OpenAI API key:
```bash
cp .env.local.example .env.local
```

### Running Locally

**Install Dependencies**  
Install all the necessary dependencies:
```bash
npm install
```

**Start the Development Server**  
Launch your development server:
```bash
npm run dev
```

**View Your Application**  
Access your app by visiting [http://localhost:3000](http://localhost:3000) in your web browser.


### Running with Docker

Build local image
``` bash
docker build -t wire-to-ui:latest .
```

Run local image
``` bash
docker run \
   -d \
   -p 3000:3000 \
   -e OPENAI_API_KEY=sk-xxxxxxxxx \
   wire-to-ui:latest
```

**Or run with docker-compose**
``` bash
docker-compose up -d
```

After the container is up, you can access the app by visiting [http://localhost:3000](http://localhost:3000) in your browser.
