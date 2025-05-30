# Personal Website & Blog

A simple, modern personal website and blog built with pure HTML, CSS, and JavaScript. No frameworks required!

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Looks great on desktop, tablet, and mobile devices
- **Blog Ready**: Pre-built blog page with post templates
- **Interactive**: Smooth scrolling, hover effects, and dynamic navigation
- **Fast Loading**: Minimal dependencies, optimized for performance
- **SEO Friendly**: Semantic HTML structure
- **Easy to Customize**: Well-organized code that's easy to modify

## 📁 File Structure

```
cosmonotes/
├── index.html          # Homepage
├── blog.html          # Blog listing page
├── styles.css         # All styling
├── script.js          # Interactive functionality
└── README.md          # This file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML files to add your personal information
3. **Add your images**: Replace placeholder images with your photos
4. **Deploy**: Upload files to any web hosting service

## ✏️ Customization Guide

### Personal Information

**Update your name and details in:**
- `index.html`: Change "Your Name" throughout the file
- `blog.html`: Update the header navigation
- Both files: Update contact links with your actual social media profiles

### Colors and Styling

**Main colors are defined in `styles.css`:**
- Primary blue: `#2563eb`
- Background: `#f8fafc`
- Text: `#333`
- Gradients: You can modify the gradient colors in the hero section

### Adding Blog Posts

1. **Create individual post pages** (e.g., `post1.html`)
2. **Update the links** in `blog.html` to point to your actual posts
3. **Follow the same structure** as the existing pages for consistency

### Adding Images

1. **Create an `images/` folder**
2. **Replace placeholder divs** with actual `<img>` tags
3. **Update the CSS** to remove placeholder styles if needed

Example:
```html
<!-- Replace this -->
<div class="placeholder-image">
    <p>Your Photo Here</p>
</div>

<!-- With this -->
<img src="images/your-photo.jpg" alt="Your Name" class="profile-image">
```

## 🎨 Advanced Customization

### Adding New Sections

1. **Add the HTML structure** in `index.html`
2. **Create corresponding CSS styles** in `styles.css`
3. **Update navigation** if needed

### Custom Animations

The website includes several animations:
- Fade-in effects on page load
- Hover effects on cards and buttons
- Smooth scrolling navigation
- Ripple effects on button clicks

You can customize these in the `script.js` file.

### Typography

The site uses system fonts with fallbacks:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

You can add custom fonts by including them in the `<head>` section.

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- 768px (tablet)
- 480px (mobile)

All layouts automatically adjust for different screen sizes.

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings

### Netlify (Free)
1. Drag and drop your folder to netlify.com
2. Your site will be live instantly

### Traditional Web Hosting
1. Upload files to your hosting provider via FTP
2. Point your domain to the hosting directory

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Adding a Contact Form

To add a working contact form, you can:

1. **Use a service like Formspree or Netlify Forms**
2. **Add the form HTML to your contact section**
3. **Style it to match your existing design**

Example with Formspree:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
    <input type="email" name="email" placeholder="Your email" required>
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

## 🎯 Performance Tips

- **Optimize images**: Use WebP format when possible
- **Minimize CSS/JS**: Use tools like UglifyJS for production
- **Enable gzip compression** on your server
- **Use a CDN** for better global performance

## 🐛 Troubleshooting

**Common issues:**

1. **Images not loading**: Check file paths are correct
2. **Styles not applying**: Ensure CSS file is linked properly
3. **JavaScript not working**: Check browser console for errors

## 📞 Support

Feel free to modify this code for your personal use. If you create something awesome, share it!

## 📄 License

This project is open source and available under the MIT License.

---

**Happy coding! 🚀**

*Made with ❤️ using pure HTML, CSS, and JavaScript* 