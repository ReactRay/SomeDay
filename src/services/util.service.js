export const utilService = {
    makeId,
    saveToStorage,
    loadFromStorage,
    debounce,
    animateCSS,
    getRandomColor,
    formatDateToStr,
    formatStrToDate,
    formatDateToPerfectStr,
    formatPerfectStrToDate,
    getNameFromEmail
  }
  
  function makeId(length = 5) {
    var text = ''
    var possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
  }
  
  function saveToStorage(key, value) {
    localStorage[key] = JSON.stringify(value)
  }
  
  function loadFromStorage(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue
    return JSON.parse(value)
  }
  
  // el = elementRef.current | animation = animation name | 
  // duration = animation duration in seconds |
  // style = during animation some syle in scss might not apply.
  // with this, you can add the missing style to the animation
  // like this for example: {position: 'fixed', opacity: 1}
  function animateCSS(el, animation, duration=1, style={}) 
  {  
    // Loop through all the style properties and apply them to the element
    for (const [key, value] of Object.entries(style)) {
      el.style[key] = value
    }
      
    // Ensure the element has the animation duration
    el.style.animationDuration = `${duration}s`;
  
    const prefix = 'animate__';
    return new Promise((resolve) => {
      const animationName = `${prefix}${animation}`;
      el.classList.add(`${prefix}animated`, animationName);
  
      function handleAnimationEnd(event) {
        event.stopPropagation();
        el.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
      }
  
      el.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
  }
  
  
  export function debounce(func, delay) {
    let timeoutId
  
    return (...args) => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        func(...args)
      }, delay)
    }
  }
  
  export function getExistingProperties(obj) {
    const truthyObj = {}
    for (const key in obj) {
      const val = obj[key]
      if (val || typeof val === 'boolean') {
        truthyObj[key] = val
      }
    }
    return truthyObj
  }

  export function convertDateToString(date){
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    return `${day}-${month}-${year}`
  }

  export function simplifyTimeToStr(time){
    const now = new Date().getTime()
    const timeSince = {timeUnit: 's',
         number: (now - time) / 1000}
    
    if(timeSince.number > 3600*24*7)
        {timeSince.timeUnit = 'w',
        timeSince.number /= 3600*24*7}
 
    else if(timeSince.number > 3600*24)
        {timeSince.timeUnit = 'd',
        timeSince.number /= 3600*24}
          
    else if(timeSince.number > 3600) 
        {timeSince.timeUnit = 'h',
        timeSince.number /= 3600}

    else if(timeSince.number > 60) 
        {timeSince.timeUnit = 'm',
        timeSince.number /= 60}
    
    const timeObj = {timeUnit: timeSince.timeUnit,
        number: parseInt(timeSince.number)}
    
    return timeObj.timeUnit + timeObj.number
}

function getRandomColor() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

function formatStrToDate(string) {
  const [day, month, year] = string.split('-')
  const monthIndex = Number(month) - 1
  return new Date(Number(year), monthIndex, Number(day))
}

function formatDateToStr(date) {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}

function formatDateToPerfectStr(date){
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 

  const day = String(date.getDate())
  const month = date.getMonth()
  const year = String(date.getFullYear())

  return {day, month: months[month], year}
}

function formatPerfectStrToDate(string) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 
    'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 

  const monthIndex = months.findIndex(string.month)
  return new Date(Number(year), monthIndex, Number(day))
}

function getNameFromEmail(emailStr){
  const atIndex = emailStr.indexOf("@");
  return emailStr.slice(0, atIndex)
}