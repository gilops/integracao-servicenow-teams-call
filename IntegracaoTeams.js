 criaReuniao: function() {
        var body = {},
            subject = 'Crise',
            startDate, endDate, attendees = [];
        var date = new GlideDateTime();

        startDate = {
            dateTime: date.toString().replace(' ', 'T') + '.000Z',
            //dateTime: '2023-05-04T20:10:47.499Z',
            timeZone: 'UTC'
        };

        var gtime1 = new GlideTime();
        gtime1.setValue("02:00:00");
        date.add(gtime1);

        endDate = {
            dateTime: date.toString().replace(' ', 'T') + '.000Z',
            //dateTime: '2023-05-11T20:10:47.499Z',
            timeZone: 'UTC'
        };

        var user = {};
        user.emailAddress = {
            address: 'email',
            name: 'name'
        };
        user.type = 'required';
        attendees.push(user);

        var user1 = {};
        user1.emailAddress = {
            address: 'email',
            name: 'name'
        };
        user1.type = 'required';
        attendees.push(user1);

        body.subject = subject;
        body.start = startDate;
        body.end = endDate;
        body.attendees = attendees;
        body.isOnlineMeeting = true;
        body.onlineMeetingProvider = 'teamsForBusiness';

        try {
            var r = new sn_ws.RESTMessageV2('Crise Meeting', 'Create Call');

            r.setRequestBody(JSON.stringify(body));

            var response = r.execute();
            var responseBody = response.getBody();
            var httpStatus = response.getStatusCode();

            responseBody = JSON.parse(responseBody);

            var url = responseBody.onlineMeeting.joinUrl;


        } catch (ex) {
            var message = ex.message;
        }
    },
