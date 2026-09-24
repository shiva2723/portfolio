// =====================================================
// MOBILE MENU
// =====================================================

const menuButton = document.querySelector(".menu-btn");
const navigation = document.getElementById("links");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen =
      navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  // Close menu after clicking a navigation link

  navigation
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navigation.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      });

    });

}


// =====================================================
// PROJECT 3D FLIP CARDS
// =====================================================

document
  .querySelectorAll(".project-flip")
  .forEach(card => {

    card.addEventListener("click", event => {

      // Don't flip again when GitHub button is clicked
      if (
        event.target.closest(".github-btn")
      ) {
        return;
      }

      card.classList.toggle("flipped");

    });

  });


// =====================================================
// CERTIFICATION + INTERNSHIP FLIP CARDS
// =====================================================

function flipCard(card) {

  if (!card) {
    return;
  }

  card.classList.toggle("flipped");

}


// =====================================================
// FOOTER YEAR
// =====================================================

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


// =====================================================
// CONTACT FORM
// =====================================================

const EMAIL =
  "shivaaprasad2723@gmail.com";

const contactForm =
  document.getElementById("contact-form");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    function (event) {

      event.preventDefault();

      const formData =
        new FormData(contactForm);

      const name =
        formData.get("name");

      const email =
        formData.get("email");

      const message =
        formData.get("message");


      const subject =
        encodeURIComponent(
          "Portfolio message from " + name
        );


      const body =
        encodeURIComponent(
          message +
          "\n\nFrom: " +
          name +
          " (" +
          email +
          ")"
        );


      window.location.href =
        "mailto:" +
        EMAIL +
        "?subject=" +
        subject +
        "&body=" +
        body;

    }
  );

}