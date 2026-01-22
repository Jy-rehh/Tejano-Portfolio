function scrollToSection(id) {
    document.getElementById(id).scrollIntoView();
}

function toggleFeatures(project) {
    const features = project.querySelector('.features');
    features.style.display =
        features.style.display === 'block' ? 'none' : 'block';
}
