$('li').on('click', function () {
  // $('iframe').attr('src', $(this).attr('data-home-type'))
  console.log($(this).attr('data-menu-option'))
  if ($(this).attr('data-menu-option') === 'home') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1_oxKracdDDsx98rdu5dwrfn2zq8A3KLc/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    $('#floatingimage').attr('src', './images/khichdi.jpeg')
  }
  if ($(this).attr('data-menu-option') === 'syllabus') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1nsYvfCt--fhS4QS_4WBnC1DgDKLaxNUX/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    $('#floatingimage').attr('src', './images/1.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'calendar') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1uoaYaJXrDENtRsEDRrg83XpdVI6T8Aue/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/8.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'people') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1k-X5TTYaaW5NANUnnLdhnG7K-1b1fPlr/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/1.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'projects') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1701vxaGox0acA9qDClxUsAR9VKhNvyVB/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/1.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'linkswelove') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1lo_T6GeUN92xTvEudhCOXm1-V_O_tHn6/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/1.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'resources') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1tZxF7Ahzl3amX9ihP_C1dklCZRP9-dqe/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/1.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'exercises') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1ca5M59QlnVfatjDWmjxWi8I6MjhSTSu7LYNcpodHpdU/edit?usp=sharing'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'citations') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1qKNyYwXuLEijvDosSPg8XwQTaK5q5fRw/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )

    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'weeklywritings') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1BZgbETZo8Ikp8nBO_T9Gdwv39lOzSfON/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'readingquestions') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/16iTkUhohL5XEbfmR82G2FAmuckTk1QZQ/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'readingquestions') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/16iTkUhohL5XEbfmR82G2FAmuckTk1QZQ/edit?usp=sharing&ouid=115629745580555138348&rtpof=true&sd=true'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }
  if ($(this).attr('data-menu-option') === 'classrecordings') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1sB4zCfNDTuc6c3YNTN23xUpWJ8tww_w3_24SBNb3C54/edit?usp=sharing'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }
})

$(document).ready(function () {
  $('#hide').click(function () {
    $('.menucontainer').hide()
  })
  $('#show').click(function () {
    $('.menucontainer').show()
  })
})

$(document).ready(function () {
  $('#hide').click(function () {
    $('.mainboximage').hide()
  })
  $('#show').click(function () {
    $('.mainboximage').show()
  })
})
