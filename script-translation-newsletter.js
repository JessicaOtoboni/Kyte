// Translations object
const translations = {
    'h1-message': {
      en: "Yay! Your registration was successful 🤩",
      es: "¡Hurra! Su registro fue exitoso 🤩",
      pt: "Eba! Sua inscrição foi feita com sucesso 🤩"
    },
    'description-message': {
      en: "Keep an eye on your email box so you don't miss any newsletters.",
      es: "Vigile su casilla de correo electrónico para no perderse ninguna newsletter.",
      pt: "Fique de olho na sua caixa de e-mails para não perder nenhuma newsletter."
    },
     'redirect-message': {
      en: "You will be redirected back to the page you were on in 5 seconds.",
      es: "Será redirigido a la página en la que estaba en 5 segundos.",
      pt: "Você será redirecionado de volta à página em que estava em 5 segundos."
    }
  };
  

// Function to get the user's locale
function getUserLocale() {
  const userLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
  // Extract the first language in the array (most preferred)
  const userLocale = userLanguages[0];
  return userLocale;
}

// Function to get the translated content for a given element ID and user's locale
function getTranslatedContent(elementId, locale) {
  const translation = translations[elementId];
  let language = locale.toLowerCase();

  if (language.includes('pt')) {
    language = 'pt';
  } else if (language.includes('es')) {
    language = 'es';
  } else {
    language = 'en';
  }

  if (translation && translation[language]) {
    return translation[language];
  } else {
    // If translation for the given locale is not available, return English as the fallback
    return translation && translation['en'] ? translation['en'] : '';
  }
}

// Function to update the content of an element with the translated text
function updateElementContent(elementId, locale) {
  const element = document.getElementById(elementId);
  if (element) {
    const translatedContent = getTranslatedContent(elementId, locale);
    element.textContent = translatedContent;
  }
}

// Example usage:
const userLocale = getUserLocale();

// Get translated content for each element ID and user's locale

updateElementContent('h1-message', userLocale);
updateElementContent('description-message', userLocale);
updateElementContent('redirect-message', userLocale);
