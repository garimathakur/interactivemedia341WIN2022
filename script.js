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
      'https://docs.google.com/document/d/119IPp5i1LEI5AUxb3Zyn-T7qkn0a1qQLlZX-NFFN0dU/edit?usp=sharing'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/1.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'linkswelove') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1OR9SnUKp7GQw_M3akzBgEeHIqzQ4dl3k8Go8K8hUXFs/edit?usp=sharing'
    )
    console.log($('#floatingimage').attr('src'))
    $('#floatingimage').attr('src', './images/1.jpeg')
    console.log('after')
    console.log($('#floatingimage').attr('src'))
  }

  if ($(this).attr('data-menu-option') === 'resources') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/12f0Vk-f7X-_VryO5VjmzZpUZd4Sew4FiK3ctMO3CW6E/edit?usp=sharing'
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
      'https://docs.google.com/document/d/1rtuUBjLEJxt3aUGojreyDmVk04in9GPnqKYYL_76sU0/edit?usp=sharing'
    )

    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'weeklywritings') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1cx6ASD9igFrYebTUgRqU2RBY1JdOQW3MBECxLUUP-mg/edit?usp=sharing'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'readingquestions') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1tA9ZuvrOjfPRdkqq-vfvFf3dMWptiwn32KH5p9RAmgI/edit?usp=sharing'
    )
    $('#floatingimage').attr('src', './images/2.jpeg')
  }

  if ($(this).attr('data-menu-option') === 'readingquestions') {
    $('#mainframe').attr(
      'src',
      'https://docs.google.com/document/d/1tA9ZuvrOjfPRdkqq-vfvFf3dMWptiwn32KH5p9RAmgI/edit?usp=sharing'
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
