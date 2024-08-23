import React from 'react'

const Map = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '0', 
      paddingBottom: '56.25%', 
      position: 'relative',
      marginTop: '20px',
    }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.9638833563745!2d30.732149175623242!3d46.46922336582478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631819e476067%3A0xc4fd19d8ea7b11a5!2z0K7QltCb0JjQotCe0JPQoNCQ0KTQnNCV0KLQkNCb0Js!5e0!3m2!1sru!2sua!4v1724351010579!5m2!1sru!2sua" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          border: 0 }} 
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </div>
  )
}

// !Для создания адаптивной карты:
// 1) Используйте контейнер с width: 100%, paddingBottom: 56.25% (соотношение сторон 16:9) и position: relative.
// 2) Внутри контейнера разместите iframe с position: absolute, top: 0, left: 0, width: 100%, и height: 100%.
// 3) Это позволит карте подстраиваться под ширину экрана и сохранять правильное соотношение сторон.

export default Map