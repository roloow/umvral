function getCookie(name) {
  var cookieValue = null
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1))
        break
      }
    }
  }
  return cookieValue
}

// Set chart options
var options = {'title':'Evaluaciones umVRal',
							 'width':600,
							 'height':300};

var app = new Vue({
	el: '#dinamicResults',
  delimiters: ['${', '}'],
	data: {
		experiences: '',
		tests: [
			{'name': 'Prueba 1', 'nota': '5.0'},
			{'name': 'Prueba 2', 'nota': '6.0'},
			{'name': 'Prueba 3', 'nota': '7.0'},
		],
		metrics: [
			{'name': 'Aciertos', 'value': '78% 100 tiros'},
			{'name': 'Tiempo', 'value': '01:05:18'},
		],
		notas: [],
		notas_avg : 0,
		tests_avg : 0,
		showavgtests : true
	},
  methods: {
    fetchData: function (event) {
      var self = this;
      //fetch('/web/course/api/', {
      fetch(apiurl, {
        credentials: 'same-origin',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
			.then(response => response.json())
			.then(json => {
				res = JSON.parse(json);
				self.$set(self, 'tests', res.tests);
				self.$set(self, 'notas', res.notas);
				sum = 0
				res.notas.forEach(a => {
					sum += a.value;
				})
				self.$set(self, 'notas_avg', sum/res.notas.length);
				sum2 = 0
				res.tests.forEach(a => {
					sum2 += a.score;
				})
				self.$set(self, 'tests_avg', sum2/res.tests.length);
				//self.$set(self, 'pending_tasks', tasks.data);
				//self.$set(self, 'pending_length', tasks.recordsTotal);
			});
    },
		changeTests: function (event) {
			that = this;
			exp_id = event.originalTarget.getAttribute("exp_id");
      fetch(apiurl+'/'+exp_id, {
        credentials: 'same-origin',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
			.then(response => response.json())
			.then(json => {
				res = JSON.parse(json);
				this.$set(that, 'tests', res.tests);
				this.$set(that, 'showavgtests', false);
			});
		},
		changeMetrics: function (event) {
			that = this;
			exp_id = event.originalTarget.getAttribute("exp_id");
      fetch(apiurl+'/'+exp_id, {
        credentials: 'same-origin',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
      })
			.then(response => response.json())
			.then(json => {
				res = JSON.parse(json);
				this.$set(that, 'metrics', res.metrics);
			});
		}
	},
	created: function() {
		this.fetchData();
	},
})