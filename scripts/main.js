let ol = document.queryselector('ol');

const links = [
    {
        label: "Week 1 Notes",
        url: "../week1/index.html"
    },
    {
        label: "Week 2 Notes",
        url: "../week2/index.html"
    }
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li><a href="${link.url}">${linkl.label}</a></li>`;
    }
)