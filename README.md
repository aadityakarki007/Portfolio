# Modern Portfolio Website

A sleek, modern, and responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your work as a Web Developer & Software Engineer with 4 years of experience.

## Features

- 🎨 Modern and Clean Design
- 📱 Fully Responsive Layout
- 🌓 Dark/Light Theme Toggle
- ⚡ Smooth Animations and Transitions
- 💼 Project Showcase with Filtering
- 📧 Contact Form with EmailJS Integration
- ⚙️ Interactive Skills Section
- 📝 Dynamic Typing Effect

## Setup Instructions

1. Clone this repository
2. Replace the EmailJS configuration in `js/main.js`:
   - Add your EmailJS public key
   - The service ID is already set to: `service_291kqy7`
   - The template ID is already set to: `template_kid4ojn`
3. Update the project content in `js/main.js`:
   - Add your projects to the `projectData` array
   - Customize the typing text in the Typed.js initialization
4. Update your profile information in `index.html`
5. Add your profile image and project images
6. Update social media links in the footer

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- [Typed.js](https://github.com/mattboldt/typed.js/) - For typing animation
- [EmailJS](https://www.emailjs.com/) - For contact form functionality
- [Font Awesome](https://fontawesome.com/) - For icons
- Google Fonts (Poppins)

## Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #4a90e2;
    --secondary-color: #6c63ff;
    /* ... other variables ... */
}
```

### Content
- Update the hero section text in `index.html`
- Modify the about section content
- Add or remove skill items
- Update project information in `js/main.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests!
