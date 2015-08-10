/* global define */
define(function() {
    return (function(){/*
<div class="hourpicker">
    <table class="picker-days">
        <thead>
            <tr>
                <td width="160">时间段</td>
                <td class="picker-day-range">
                    <span class="item item-0">0:00</span>
                    <span class="item item-6">6:00</span>
                    <span class="item item-12">12:00</span>
                    <span class="item item-18">18:00</span>
                    <span class="item item-24">24:00</span>
                </td>
                <td width="40" align="center"></td>
            </tr>
        </thead>
        <tbody>
            <tr class="picker-day" data-value="12345">
                <td class="picker-label">
                    <span bx-click="toggle(1)">工作日</span>
                </td>
                <td class="">
                    <div class="picker-hours">
                        <% for ( var ii = 0; ii < 24; ii++ ) { %>
                        <div class="picker-hour <%= ii % 6 === 0 ? 'milestone' : ''%>" data-value=<%= ii %>>
                            <div class="picker-hour-line"></div>
                            <div class="picker-hour-duration"></div>
                            <div class="picker-hour-start bottom">
                                <div class="picker-hour-arrow arrow"></div>
                                <span><%= ii %>:00</span>
                            </div>
                            <div class="picker-hour-end top">
                                <div class="picker-hour-arrow arrow"></div>
                                <span><%= ii+1 %>:00</span>
                            </div>
                        </div>
                        <% } %>
                        <div class="picker-hour milestone">
                            <div class="picker-hour-line"></div>
                        </div>
                    </div>
                </td>
                <td align="center">
                    <div class="operation"></div>
                </td>
            </tr>
            <tr class="picker-day" data-value="60">
                <td class="picker-label">
                    <span bx-click="toggle(60)">休息日</span>
                </td>
                <td class="">
                    <div class="picker-hours">
                        <% for ( var ii = 0; ii < 24; ii++ ) { %>
                        <div class="picker-hour <%= ii % 6 === 0 ? 'milestone' : ''%>" data-value=<%= ii %>>
                            <div class="picker-hour-line"></div>
                            <div class="picker-hour-duration"></div>
                            <div class="picker-hour-start bottom">
                                <div class="picker-hour-arrow arrow"></div>
                                <span><%= ii %>:00</span>
                            </div>
                            <div class="picker-hour-end top">
                                <div class="picker-hour-arrow arrow"></div>
                                <span><%= ii+1 %>:00</span>
                            </div>
                        </div>
                        <% } %>
                        <div class="picker-hour milestone">
                            <div class="picker-hour-line"></div>
                        </div>
                    </div>
                </td>
                <td align="center">
                    <div class="operation"></div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    */}).toString().split('\n').slice(1,-1).join('\n') + '\n'
})