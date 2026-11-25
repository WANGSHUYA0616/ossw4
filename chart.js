/**
 * 카페 매출 대시보드 차트 및 UI 렌더링 로직 (chart.js)
 * Chart.js 라이브러리를 활용하여 일별 매출 꺾은선 차트, 메뉴별 판매량 막대 차트, 요일별 평균 매출 표를 생성합니다.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 기본 통계 계산
    const stats = calculateDashboardStats();

    // 2. 상단 KPI 요약 카드 렌더링
    renderKpiCards(stats);

    // 3. 일별 매출 꺾은선 차트 생성
    renderDailySalesChart();

    // 4. 메뉴별 판매량 막대 차트 생성
    renderMenuSalesChart(stats);

    // 5. 요일별 평균 매출 표 생성
    renderWeekdayAverageTable(stats);
});

/**
 * 대시보드 통계 계산 함수
 */
function calculateDashboardStats() {
    let totalRevenue = 0;
    let totalQuantity = 0;
    const menuStats = {};

    // 메뉴별 통계 초기화
    MENU_ITEMS.forEach(item => {
        menuStats[item.name] = {
            id: item.id,
            name: item.name,
            price: item.price,
            color: item.color,
            totalQty: 0,
            totalRevenue: 0
        };
    });

    // 요일별 통계 초기화 (월~일 순서)
    const weekdaysOrder = ['월', '화', '수', '목', '금', '토', '일'];
    const weekdayStats = {};
    weekdaysOrder.forEach(w => {
        weekdayStats[w] = {
            dayOfWeek: w,
            count: 0,
            totalRevenue: 0,
            averageRevenue: 0
        };
    });

    // 30일 데이터 순회 계산
    DAILY_SALES_DATA.forEach(dayRecord => {
        totalRevenue += dayRecord.dailyTotalRevenue;
        totalQuantity += dayRecord.dailyTotalQty;

        // 요일 통계 누적
        const dow = dayRecord.dayOfWeek;
        if (weekdayStats[dow]) {
            weekdayStats[dow].count += 1;
            weekdayStats[dow].totalRevenue += dayRecord.dailyTotalRevenue;
        }

        // 메뉴별 통계 누적
        Object.entries(dayRecord.sales).forEach(([name, sale]) => {
            if (menuStats[name]) {
                menuStats[name].totalQty += sale.qty;
                menuStats[name].totalRevenue += sale.revenue;
            }
        });
    });

    // 요일별 평균 계산
    weekdaysOrder.forEach(w => {
        const item = weekdayStats[w];
        item.averageRevenue = item.count > 0 ? Math.round(item.totalRevenue / item.count) : 0;
        item.percentage = totalRevenue > 0 ? ((item.totalRevenue / totalRevenue) * 100).toFixed(1) : 0;
    });

    // 최고 인기 메뉴 찾기
    const bestSeller = Object.values(menuStats).reduce((max, cur) => cur.totalQty > max.totalQty ? cur : max, { totalQty: -1 });

    return {
        totalRevenue,
        totalQuantity,
        averageDailyRevenue: Math.round(totalRevenue / DAILY_SALES_DATA.length),
        menuStats,
        weekdayStats,
        weekdaysOrder,
        bestSeller
    };
}

/**
 * 상단 KPI 요약 카드 렌더링
 */
function renderKpiCards(stats) {
    document.getElementById('kpi-total-revenue').textContent = stats.totalRevenue.toLocaleString() + '원';
    document.getElementById('kpi-total-qty').textContent = stats.totalQuantity.toLocaleString() + '잔/개';
    document.getElementById('kpi-avg-revenue').textContent = stats.averageDailyRevenue.toLocaleString() + '원';
    document.getElementById('kpi-best-seller').textContent = `${stats.bestSeller.name} (${stats.bestSeller.totalQty.toLocaleString()}건)`;
    
    if (document.getElementById('cafe-period-badge')) {
        document.getElementById('cafe-period-badge').textContent = CAFE_INFO.period;
    }
}

/**
 * 기능 ① 일별 매출 꺾은선 차트 (Line Chart)
 */
function renderDailySalesChart() {
    const ctx = document.getElementById('dailySalesChart').getContext('2d');

    const labels = DAILY_SALES_DATA.map(d => `${d.day}일 (${d.dayOfWeek})`);
    const revenues = DAILY_SALES_DATA.map(d => d.dailyTotalRevenue);

    // 차트 그라데이션 배경 효과
    const gradient = ctx.createLinearGradient(0, 0, 0, 350);
    gradient.addColorStop(0, 'rgba(196, 112, 54, 0.35)');
    gradient.addColorStop(1, 'rgba(196, 112, 54, 0.02)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '일별 매출 (원)',
                data: revenues,
                borderColor: '#b45309',
                backgroundColor: gradient,
                borderWidth: 2.5,
                fill: true,
                tension: 0.3,
                pointBackgroundColor: DAILY_SALES_DATA.map(d => d.isWeekend ? '#dc2626' : '#b45309'),
                pointBorderColor: '#ffffff',
                pointBorderWidth: 1.5,
                pointRadius: 4.5,
                pointHoverRadius: 7
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        boxWidth: 14,
                        font: { size: 13, weight: 'bold' }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` 매출액: ${context.parsed.y.toLocaleString()}원`;
                        },
                        afterLabel: function(context) {
                            const index = context.dataIndex;
                            const d = DAILY_SALES_DATA[index];
                            return ` 총 판매량: ${d.dailyTotalQty.toLocaleString()}개`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 11 },
                        maxRotation: 45,
                        minRotation: 30
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.06)'
                    },
                    ticks: {
                        callback: function(value) {
                            return (value / 10000).toLocaleString() + '만원';
                        },
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

/**
 * 기능 ② 메뉴별 판매량 막대 차트 (Bar Chart)
 */
function renderMenuSalesChart(stats) {
    const ctx = document.getElementById('menuSalesChart').getContext('2d');

    const menuItems = MENU_ITEMS;
    const labels = menuItems.map(m => m.name);
    const quantities = menuItems.map(m => stats.menuStats[m.name].totalQty);
    const backgroundColors = [
        '#8B5A2B', // 아메리카노 (에스프레소 브라운)
        '#C49A6C', // 카페라떼 (라떼 베이지)
        '#E0B589', // 바닐라라떼 (바닐라 크림)
        '#F472B6', // 딸기에이드 (딸기 핑크)
        '#6D4C41'  // 초코 크루아상 (초콜릿)
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '총 판매량 (잔/개)',
                data: quantities,
                backgroundColor: backgroundColors,
                borderColor: backgroundColors.map(c => c),
                borderWidth: 1,
                borderRadius: 8,
                barPercentage: 0.65
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const menuName = context.label;
                            const qty = context.parsed.y;
                            const rev = stats.menuStats[menuName].totalRevenue;
                            return [
                                ` 판매량: ${qty.toLocaleString()} 잔/개`,
                                ` 총매출: ${rev.toLocaleString()} 원`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: { size: 13, weight: 'bold' }
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.06)'
                    },
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + '개';
                        },
                        font: { size: 12 }
                    }
                }
            }
        }
    });
}

/**
 * 기능 ③ 요일별 평균 매출 표 (Table)
 */
function renderWeekdayAverageTable(stats) {
    const tbody = document.getElementById('weekdayTableBody');
    tbody.innerHTML = '';

    // 평균 매출 기준 내림차순 정렬하여 순위 계산
    const sortedList = [...stats.weekdaysOrder].sort((a, b) => {
        return stats.weekdayStats[b].averageRevenue - stats.weekdayStats[a].averageRevenue;
    });

    let totalAllRev = 0;
    let totalAllDays = 0;

    stats.weekdaysOrder.forEach(day => {
        const item = stats.weekdayStats[day];
        totalAllRev += item.totalRevenue;
        totalAllDays += item.count;

        const rank = sortedList.indexOf(day) + 1;
        const isTop = rank === 1;
        const isWeekend = (day === '토' || day === '일');

        const tr = document.createElement('tr');
        if (isTop) tr.className = 'top-rank-row';

        tr.innerHTML = `
            <td>
                <span class="day-badge ${isWeekend ? 'weekend' : 'weekday'}">${day}요일</span>
            </td>
            <td class="text-center font-medium">${item.count}일</td>
            <td class="text-right font-medium">${item.totalRevenue.toLocaleString()}원</td>
            <td class="text-right font-bold highlight-cell">${item.averageRevenue.toLocaleString()}원</td>
            <td class="text-center">
                <span class="rank-badge rank-${rank}">${rank}위</span>
            </td>
            <td>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${item.percentage}%;"></div>
                    <span class="progress-text">${item.percentage}%</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // 전체 합계 및 평균 푸터 렌더링
    const tfoot = document.getElementById('weekdayTableFoot');
    const grandAverage = totalAllDays > 0 ? Math.round(totalAllRev / totalAllDays) : 0;
    tfoot.innerHTML = `
        <tr class="table-total-row">
            <td class="font-bold">전체 합계 / 평균</td>
            <td class="text-center font-bold">${totalAllDays}일</td>
            <td class="text-right font-bold text-amber-800">${totalAllRev.toLocaleString()}원</td>
            <td class="text-right font-bold text-amber-800">${grandAverage.toLocaleString()}원</td>
            <td class="text-center font-bold">-</td>
            <td class="text-center font-bold">100.0%</td>
        </tr>
    `;
}

