describe("Test intersection functions", function() {
    var board, A, B, C;

    document.getElementsByTagName('body')[0].innerHTML = '<div id="jxgbox" style="width: 100px; height: 100px;"></div>';
    board = JXG.JSXGraph.initBoard('jxgbox', {
        renderer: 'svg',
        axis: false,
        grid: false,
        boundingbox: [-8, 8, 8, -8],
        showCopyright: false,
        showNavigation: false
    });

    it("Intersection curve-circle", function() {
        var A = board.create('point', [0, 4], { visible: false }),
            B = board.create('point', [0, -4], { visible: false }),
            C = board.create('point', [1, 0], { visible: false }),
            el = board.create('ellipse', [A, B, C]),
            circle = board.create('circle', [[0, 0], [2, 0]], {point2: {color: 'red'}, strokeWidth: 1}),
            ip = [], i,
            x = [0.9012517057297676, -0.9013129108207755, -0.901326508055587, 0.9012803196247847],
            y = [1.7849765412698027, 1.7849451757430674, -1.7849382076228515, -1.7849618776221492];

        for (i = 0; i < 4; i++) {
            ip[i] = board.create('intersection', [circle, el, i], {name: ''+i});
        }


        for (i = 0; i < 4; i++) {
            expect(ip[i].X()).toBeCloseTo(x[i], 5);
            expect(ip[i].Y()).toBeCloseTo(y[i], 5);
        }
    });

    it("Intersection arc-arc", function() {
        var a1 = board.create('arc', [[0, 2], [-3, 2], [3, 2]]),
            a2 = board.create('arc', [[0, 0], [3, 0], [-3, 0]]),
            ip = [], i,
            x = [-2.8286194188088936, 2.8286194188088922],
            y = [1.0000000000000016, 0.9999999999999984];

        ip[0] = board.create('intersection', [a1, a2, 0], {alwaysIntersect: false});
        ip[1] = board.create('intersection', [a1, a2, 1]);
        for (i = 0; i < 2; i++) {
            expect(ip[i].X()).toBeCloseTo(x[i], 14);
            expect(ip[i].Y()).toBeCloseTo(y[i], 14);
        }
    });

    it("Intersection arc-sector", function() {
        var a1 = board.create('sector', [[0, 2], [-3, 2], [3, 2]]),
            a2 = board.create('arc', [[0, 0], [3, 0], [-3, 0]]),
            ip = [], i,
            x = [-2.8286194188088936, 2.8286194188088922],
            y = [1.0000000000000016, 0.9999999999999984];

        ip[0] = board.create('intersection', [a1, a2, 0], {alwaysIntersect: false});
        ip[1] = board.create('intersection', [a1, a2, 1]);
        for (i = 0; i < 2; i++) {
            expect(ip[i].X()).toBeCloseTo(x[i], 14);
            expect(ip[i].Y()).toBeCloseTo(y[i], 14);
        }
    });

});