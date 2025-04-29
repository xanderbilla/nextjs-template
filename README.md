# **Next.js Template**

A clean, modern, and production-ready **Next.js 14** template featuring a polished landing page, **Tailwind CSS** styling, **Docker** support, and dark mode compatibility.

## 🚀 Features

- ⚡ Built with **Next.js 14 (App Router)**
- 🎨 Styled using **Tailwind CSS**
- 🐳 **Docker-ready** for containerized deployment
- 🌙 **Dark mode** out of the box
- 📱 Fully **responsive** across devices
- 🎬 Smooth **animations** and transitions
- 🔤 Uses [Geist](https://vercel.com/font) font by Vercel

## 🛠️ Getting Started

### 🔧 Local Development

1. **Clone the repository:**

   ```bash
   git clone https://github.com/xanderbilla/nextjs-template.git
   cd nextjs-template
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 🐳 Docker Setup

1. **Pull from Docker Hub:**

```bash
# Replace USERNAME with your Docker Hub username
docker pull USERNAME/nextjs-template:latest
```

2. **Or build locally:**

```bash
docker build -t nextjs-template .
```

3. **Run the container:**

```bash
docker run -p 3000:3000 nextjs-template
```

Your app will be live at [http://localhost:3000](http://localhost:3000)

### 🔄 CI/CD Pipeline

This template includes a GitHub Actions workflow that automatically:

- Builds the Docker image
- Pushes it to Docker Hub with version tags
- Maintains both version and latest tags
- Caches build layers for faster builds

To use the CI/CD pipeline:

1. Fork this repository
2. Add these secrets to your GitHub repository:
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token

The workflow will trigger on:

- Push to main branch (creates/updates `latest` tag)
- Creating a version tag like `v1.0.0` (creates version-specific tag)
- Pull requests to main branch
- Manual trigger from Actions tab

#### Version Management

To create a new version:

```bash
# Create and push a new version tag
git tag v1.0.0
git push origin v1.0.0
```

This will trigger the workflow to:

- Build the image
- Tag it as both `USERNAME/nextjs-template:1.0.0` and `USERNAME/nextjs-template:latest`
- Push both tags to Docker Hub

To pull a specific version:

```bash
# Pull latest
docker pull USERNAME/nextjs-template:latest

# Pull specific version
docker pull USERNAME/nextjs-template:1.0.0
```

## 📁 Project Structure

```
nextjs-template/
├── app/               # App router logic
├── components/        # Reusable UI components
├── public/            # Static assets
├── styles/            # Global CSS
├── Dockerfile         # Docker configuration
└── package.json       # Project dependencies
```

## 🧑‍💻 Development Notes

- Modify the main landing page in `app/page.tsx`
- Hot reload enabled—changes reflect instantly in development
- Built for rapid deployment and customization

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Docker Documentation](https://docs.docker.com)

## 🤝 Contributing

Pull Requests are welcome! If you have suggestions or improvements, feel free to fork the repo and submit a PR.

## 📄 License & Usage

This project is protected under a **Formal Commercial Use License (FCUL)**.

- 🔒 Personal and commercial use **requires a signed agreement** with the author.
- 📝 Full licensing terms can be found in the [LICENSE](./TEMPLATE_LICENSE.md) file.
- ❗ Unauthorized use, duplication, or resale is strictly prohibited.

For licensing or business inquiries, please open an [issue](https://github.com/xanderbilla/nextjs-template/issues) or contact the author directly.

## 📬 Contact

For commercial inquiries or licensing discussions:

- Open an issue: [GitHub Issues](https://github.com/xanderbilla/nextjs-template/issues)
- Or contact the maintainer via GitHub profile
